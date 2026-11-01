import os from 'os';
export const dynamic = 'force-dynamic';
export async function GET(){return Response.json({status:'ok',service:'ISMT College Cloud Portal',hostname:os.hostname(),timestamp:new Date().toISOString()});}
