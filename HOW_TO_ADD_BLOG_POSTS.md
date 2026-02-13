# How to Add Blog Posts to DONGCO Blog

## Simple! Just Add to the Array in blog.html

To add a new blog post, you add it to the `blogPosts` array in `blog.html`. No separate files needed!

---

## Step-by-Step Instructions

### Step 1: Open blog.html

Find the `blogPosts` array around line 468:

```javascript
const blogPosts = [
    { /* existing posts */ }
];
```

### Step 2: Add Your New Post

Add a new object to the beginning of the array (so it appears first):

```javascript
const blogPosts = [
    {
        title: "Your New Post Title",
        author: "Author Name",
        date: "2026-02-14",  // YYYY-MM-DD format
        image: "",  // Optional: path to header image or leave empty
        content: `Your Markdown content here...

## Headings Work

- Lists work
- **Bold works**
- *Italic works*

![Images work](https://url-to-image.jpg)`
    },
    { /* older posts below */ }
];
```

### Step 3: Done!

Save the file and push to GitHub. Your post will appear immediately!

---

## Markdown Formatting Guide

Inside the `content` field, you can use full Markdown:

### Headings
```markdown
## Medium Heading (H2)
### Small Heading (H3)
```

### Text Formatting
```markdown
**bold text**
*italic text*
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

### Links
```markdown
[Link text](https://url.com)
```

### Images
```markdown
![Alt text](https://url-to-image.jpg)
```

### Quotes
```markdown
> This is a quote
```

### Horizontal Line
```markdown
---
```

---

## Example: Complete Blog Post Entry

```javascript
const blogPosts = [
    {
        title: "Size Matters: A Beginner's Guide",
        author: "Hardy",
        date: "2026-02-15",
        image: "assets/size-comparison.jpg",  // Optional
        content: `Let's talk about size. Not gonna sugarcoat it—choosing the wrong size can ruin your experience.

## Start Where You Are

First time? **Don't** jump straight to the biggest toy. Your hole needs training.

### Size Categories

- **Beginner (1-1.5" diameter)**: Perfect for starting out
- **Intermediate (1.5-2" diameter)**: Ready for more
- **Advanced (2-2.5" diameter)**: Experienced players
- **Size Queen (2.5"+ diameter)**: You know who you are

## How to Progress

1. Start comfortable
2. Use plenty of lube
3. Take your time
4. Listen to your body
5. Level up when ready

---

Got questions? That's what we're here for.

*Built to last. Built to destroy. That's DONGCO.*`
    },
    // ... other posts below
];
```

---

## Quick Prompt for LLMs

**Copy and paste this to any LLM:**

```
Add a new blog post to the DONGCO website. Follow these steps:

1. Open blog.html
2. Find the blogPosts array (around line 468)
3. Add a new post object at the BEGINNING of the array:
   {
       title: "[post title]",
       author: "[author name or 'Rod & Hardy']",
       date: "YYYY-MM-DD",
       image: "[optional image URL or empty string]",
       content: `[Markdown content here]`
   },
4. Use DONGCO's bold, explicit, community-focused tone
5. Use Markdown for formatting (headings, bold, lists, images, links)

Blog topic: [describe what you want]
Tone: Bold, direct, sexually explicit - matching DONGCO's brand (hardcore gay dildo company, 1978 SF Castro, by homos for homos)
```

---

## Tips

✅ **DO:**
- Add new posts at the BEGINNING of the array (they'll appear first)
- Use backticks `` ` `` for multi-line content
- Escape any backticks in your content with backslash: `` \` ``
- Write naturally in Markdown
- Use date format YYYY-MM-DD
- Keep DONGCO's bold voice

❌ **DON'T:**
- Forget the comma after each post object
- Use HTML (stick to Markdown)
- Skip the date field
- Forget to escape special characters

---

## Why This Approach?

**Previous system** used separate `.md` files that required a web server to fetch.  
**Current system** embeds posts directly in HTML - works on ANY hosting platform!

✅ Works on GitHub Pages  
✅ Works on static hosting  
✅ Works offline  
✅ No fetch/CORS issues  
✅ Faster loading

---

## Need Help?

- **Markdown guide**: https://www.markdownguide.org/basic-syntax/
- **Check your post**: Just open blog.html in a browser
- **Troubleshooting**: Check browser console (F12) for JavaScript errors

Simple, fast, reliable! 🔥
