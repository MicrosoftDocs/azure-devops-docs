Once your publisher has been verified by Microsoft, you can make an integration public by setting the `public` flag in its manifest to `true` and re-uploading.

1. Open your `vss-integration.json` manifest file
3. Set the value of the `public` attribute to `true` (you may need to add this attribute if it does not exist)
   ```json
   {
       "id": "myservice",
       "publisher": "mycompany",
       "description": "...",
       "public": true
   }
   ```
4. Re-package and update (re-upload) your item (see [package steps](#package)).
5. The Availability column will reflect that your item is now public. All users can now see your item on the Marketplace:

   ![avail](./_img/public-availability.png)