# Portfolio Website with Supabase Backend

A modern, dynamic portfolio website with a full-featured admin panel powered by Supabase.


## Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── admin.html              # Admin panel
├── styles.css              # Portfolio styles
├── admin-styles.css        # Admin panel styles
├── app.js                  # Portfolio functionality
├── admin.js                # Admin panel functionality
├── config.js               # Supabase configuration
├── supabase-schema.sql     # Database schema
└── README.md               # This file
```

## Admin Panel Features

### Keywords Management
- Add/Edit/Delete keywords that appear in the hero section
- Control the order of keywords

### Services Management
- Add/Edit/Delete services you offer
- Include title, description, icon (emoji), and order

### Skills Management
- Add/Edit/Delete your skills
- Include name, icon (emoji), and order

### Education Management
- Add/Edit/Delete education entries
- Include degree, institution, start/end year, and status

### Achievements Management
- Two types: Internships and Certificates
- Upload images for each achievement
- Add title and description
- Images are stored in Supabase Storage

## Customization

### Adding Your Profile Image
Replace the `profile.jpg` reference in `index.html` with your actual profile image.

### Changing Colors
The main accent color is `#ff4444` (red). You can change this throughout the CSS files to match your brand.

### Adding Social Links
Update the social media links in `index.html` with your actual profiles.
