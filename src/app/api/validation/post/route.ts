import { NextResponse } from 'next/server';

// this api is created to handle the sslCommerch return-urls('/validation', '/cancel', '/failed', '/success') as they makes a post request on the backend given urls

interface PostRequest extends Request {
  formData: () => Promise<FormData>;
}

export async function POST(request: PostRequest): Promise<NextResponse> {
  // Extract data from the POST request (assuming form data; adjust if it’s JSON)
  const body = await request.formData(); // Use request.json() if the gateway sends JSON
  const tran_id = body.get('tran_id') as string;

  // Check if tran_id exists
  if (!tran_id) {
    return new NextResponse('Missing transaction ID', { status: 400 });
  }

  // Construct the redirect URL with tran_id as a query parameter
  const redirectUrl = `/validation?tran_id=${encodeURIComponent(tran_id)}`;

  // Redirect to the validation page
  return NextResponse.redirect(new URL(redirectUrl, request.url), 303);
}
