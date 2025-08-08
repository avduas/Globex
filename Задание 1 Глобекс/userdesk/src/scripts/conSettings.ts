interface ConnectionSettings {
  domain: string;
  conProtocol: 'http' | 'https';
}

export const conSettings: ConnectionSettings  = {
    domain : 'localhost:3000',    //Domain
    conProtocol : 'http'           //Change to https after deployment
}