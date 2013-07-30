#Example using Device Storage#

Since [device storage](https://developer.mozilla.org/en-US/docs/WebAPI/Device_Storage)
requires a [packaged/privileged app status](https://developer.mozilla.org/en-US/docs/Web/Apps/App_permissions?redirectlocale=en-US&redirectslug=Apps%2FApp_permissions#Hosted_app_and_privileged_app_permissions)
the systemXHR permission is also required to make XHRs to to other domains
(packaged apps have a UUID generated at install time for an origin).  Don't
forget to add the permissions to the manifest.

This example app makes an XHR back to within the package for a simple png file,
and saves it to the SD card.  If a file with the same name already exists, it
fails.

