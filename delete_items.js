/*
	Copyright @2019 [Amazon Web Services] [AWS]

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

/*

SOLUTION

You cannot just copy and paste this solution code because
the bucket name needs to be your bucket name.

If you run it "as is" it will not work!

You must replace <FMI> with your bucket name.

E.g.,

2019-03-02-sally-catlostandfoundwebsite

Keep the quotes around the bucket name, and  only
replace the characters <FMI>.



*/
var
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-west-2"
    }),
    bucket_name_str = "2020-11-09-kdr-catlostandfoundwebsite";


(function deleteObjects(){
    var params = {
      Bucket: "2020-11-09-kdr-catlostandfoundwebsite", 
      Delete: {
       Objects: [
          {
         Key: "index.html"
        }, 
          {
         Key: "cat.jpg"
        }
       ], 
       Quiet: false
      }
     };
     
     S3API.deleteObjects(params, function(err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log(data);  
     });
})();
