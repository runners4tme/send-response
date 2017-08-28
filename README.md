# Send-response

## Instructions

1. Install the package :

    ```
    npm install send-response

    ```

2. Examples of how to use the package:

   ```
   const sendResponse = require('send-response')

   module.exports.addResource = (req, res, next) => {
   const resource = new Resource({ req.body })
   resource.save()
   .then(resource => sendResponse(res, 201, {id: resource._id}))
   .catch(err => handleError(err))
   }
   ```

3. You can add suggestions via issues
