addSubDomain({
  description: 'A website for my portofolio project',
  domain: 'is-an.app',
  subdomain: 'kratosdev',
  owner: {
    email: 'kratos1901@gmail.com',
  },
  record: {
    CNAME: 'cname.vercel-dns.com',
    TXT: 'vc-domain-verify=kratosdev.is-an.app,7c907f5c77c51480696e',
  },
  proxy: false
});
