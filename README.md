# AvatarGenerator

AvatarGenerator is a lightweight JavaScript library that generates customizable avatars with initials and random background colors. Perfect for user profile spaces!

## Features

- Generates initials from names.
- Applies random and vibrant background colors.
- Lightweight and easy to integrate.
- Requires no external dependencies.

## How to Use

To use AvatarGenerator, follow these simple steps:

### 1. Include the Library

Add the script to your HTML file:

```html
<script src="https://mateusvega.github.io/AvatarGenerator/AvatarGenerator.mjs"></script>
```
### 2. Generate an Avatar
Use the AvatarGenerator.generateAvatar() method to create an avatar for a given name. The method returns a Base64-encoded image URL.

```html
<script>
 const avatarURL = AvatarGenerator.generateAvatar("Mateus Vega");
 document.getElementById("avatar").src = avatarURL;
</script>
```
### 3. Display the Avatar
Include an <img> tag in your HTML to display the generated avatar:
```html
<img id="avatar" alt="Generated Avatar">
```
Here's a full Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Avatar Generator Example</title>
</head>
<body>
 <h1>Avatar Generator Example</h1>
 <img id="avatar" alt="Generated Avatar" />
 
 <script src="https://mateusvega.github.io/AvatarGenerator/AvatarGenerator.mjs"></script>
 <script>
  const avatarURL = AvatarGenerator.generateAvatar("Mateus Vega");
  document.getElementById("avatar").src = avatarURL;
 </script>
</body>
</html>
```

### Browser Compatibility
AvatarGenerator is compatible with all modern browsers.

### License
This project is open source and available under the MIT License.
