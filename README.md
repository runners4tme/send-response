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
   const student = new Resource({ req.body })
   student.save()
   .then(student => sendResponse(res, 201, {id: student._id}))
   .catch(err => handleError(err))
   }
   ```

3. You can add suggestions via issues
