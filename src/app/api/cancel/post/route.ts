import { NextResponse } from 'next/server';

// this api is created to handle the sslCommerch return-urls('/validation', '/cancel', '/failed', '/success') as they makes a post request on the backend given urls

export async function POST(request: Request): Promise<NextResponse> {
  // Construct the redirect URL with tran_id as a query parameter
  const redirectUrl = '/cancel';

  // Redirect to the validation page
  return NextResponse.redirect(new URL(redirectUrl, request.url), 303);
}
