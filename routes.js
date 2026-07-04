function routes(app,siteroot){
    //mock user data
    let users=[
    {"email":"abc@com.au","pwd":"25","id":"25"},
    {"email":"abc@com.au","pwd":"20","id":"20"},
    {"email":"abc@com.au","pwd":"35","id":"35"},
    {"email":"abc@com.au","pwd":"99","id":"99"},
    {"email":"abc@com.au","pwd":"74","id":"74"},
    {"email":"abc@com.au","pwd":"53","id":"53"},
    {"email":"abc@com.au","pwd":"28","id":"28"}];

    // respond with 200 OK if server is running.
    app.get('/api/health', (req, res) => {
        res.status(200).json({ status: 'ok' });
    });

    /*-------------------------------------
    authenticate a user based on ID, email and password
    returns: valid:boolean and message:string
    ------------------------------------- */
    app.post("/api/login",function(req,res){
       

        if(!req.body){
            return res.sendStatus(400);
        }
        let customer={};
        const { email, pwd,userId } = req.body;
       
        customer.message = 'No User of that ID exists';
        customer.valid=false;
        for(const user of users){
            if(userId ==user.id){
                if (email == user.email && pwd==user.pwd){
                    customer.valid = true;
                    customer.message = "Successful login";
                }else{
                    customer.valid = false;
                    customer.message =" Credentials do not match";
                }
            }
        }  
        res.send(customer);
    })
}

export{routes};