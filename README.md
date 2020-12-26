![app image](https://i.imgur.com/IunhinM.png)
# A NextJS webapp for the [gc-dportal-caps](https://github.com/gustavokei/gc-dportal-caps) project
This app functions as a game portal where users can:
* Login & Register
* Manage their accounts/characters
* Add/edit/delete items
* See PVE & PVP rankings (top 10)

Developed using ReactJS with Hooks API + function components

The name "Soluna" refers to an [weapon](https://grandchase.fandom.com/wiki/Soluna) from the Korean game [Grand Chase](https://grandchase.fandom.com/wiki/Grand_Chase_Wiki).

> It is a two-handed sword that can split into the weapons Sol, the larger, single-handed sword, and Luna, the smaller, almost dagger-like blade, where its name originated from.

Composed as a full-stack solution, this project is also split in two

# Live Demo
[https://grandchase.online/](https://grandchase.online/)

Please, register your own account.

# Getting started

* Clone this repository on your local computer
* Configure .env.local as needed 
* Run the `npm install` and `npm start`

```
git clone https://github.com/gustavokei/gc-app-caps.git
cd gc-app-caps/
cp sample.env.local .env.local
// modify .env as needed
npm install
npm start
// visit localhost:3000
```

Your app should now be running on [localhost:3000](http://localhost:3000/)

## .env.local file configuration

* `NEXT_PUBLIC_API` = [gc-dportal-caps](https://github.com/gustavokei/gc-dportal-caps) api url
* `NEXT_PUBLIC_PAYPAL_CLIENT_ID` = Paypal client id

## Documentation

For more information about our project, [visit our wiki.](https://github.com/gustavokei/gc-app-caps/wiki)
