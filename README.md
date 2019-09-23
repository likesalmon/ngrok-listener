# Ngrok Listener

Log out requests to a public URL tunneled to a local server.

## Usage

1. Start server: `$ npm start`
2. Start ngrok: `$ ./ngrok http 3000`

```bash
ngrok by @inconshreveable                                                  (Ctrl+C to quit)
                                                                                          
Session Status                online                                                       
Account                       Ammon Morris (Plan: Free)                                    
Version                       2.3.34                                                       
Region                        United States (us)                                           
Web Interface                 http://127.0.0.1:4040                                        
Forwarding                    http://04255cb7.ngrok.io -> http://localhost:3000            
Forwarding                    https://04255cb7.ngrok.io -> http://localhost:3000           
                                                                                          
Connections                   ttl     opn     rt1     rt5     p50     p90                  
                              2       0       0.01    0.01    2.69    5.02                 
                                                                                          
HTTP Requests                                                                              
-------------                                                                              
                                                                                          
GET /favicon.ico               404 Not Found                                               
GET /                          200 OK   
```

> Make requests to the forwarding address provided in the output.