# Mediafan

## Website not intended to be used by the public in general. It's only a way to demonstrate, learn and practice my coding skills

## Techonologies Used
+ Angular 7
+ NodeJS & Nginx
+ ExpressJS
+ MongoDB
+ PassportJS
+ SocketIO
+ Amazon Web Services (S3)
+ Git
+ SASS

## Pages and features
+ Landing Page
+ Sign in
+ Sign up
+ Home Page: Shows posts uploaded by people you follow
+ Search Bar: Search users registered on the site
+ Profile: Shows your information and posts uploaded. Gives you the option of creating more posts with images, headers, quotes and simple text.
+ Edit Profile: Change your email, information and profile photo. Follow and unfollow users.
+ Chat: Send messages to users in real time. Implemented with SocketIO. Sends notification alert if you receive a message while you are not in chat.

## How To Install
Clone the repo with
```
$ git clone https://github.com/JoseBric/media-fan-mean.git
```
Once you've downloaded the project, get into it on the terminal and run the following command. 
```
$ npm run install-dependencies
```
Then lets set up the environment variables. Rename the .env.example file as .env and fill in the information required.
Inside the folder client/src/app you will find the file config.json.example, rename it as config.json and change the configuration.

Now you can run the dev server
```
$ npm run dev
```
Or build the client angular side and run only the server for production 
```
$ npm run build && npm run start
```

# [Link to Website](https://mediafan.josebric.info)




