# How to Add Blog Posts to DONGCO Blog

## Super Simple! Just Drop a Markdown File

To add a new blog post, you simply create a `.md` (Markdown) file in the `blog/posts/` folder!

---

## Step-by-Step Instructions

### Step 1: Create a New Markdown File

Create a file in `blog/posts/` with the format: `YYYY-MM-DD-title.md`

Example: `blog/posts/2026-02-14-quality-standards.md`

### Step 2: Add Frontmatter (Metadata)

At the top of your file, add this:

```markdown
---
title: Your Blog Post Title Here
author: Your Name
date: 2026-02-14
image: assets/your-image.jpg
---
```

**Fields:**
- `title`: The blog post title
- `author`: Who wrote it
- `date`: YYYY-MM-DD format
- `image`: (optional) Path to header image. Leave empty if no image.

### Step 3: Write Your Content in Markdown

After the frontmatter, write your blog post using **Markdown formatting**:

```markdown
---
title: Product Quality Standards
author: Rod & Hardy
date: 2026-02-14
image: assets/workshop.jpg
---

At DONGCO, quality isn't negotiable. Every toy we make goes through rigorous testing.

## Our Testing Process

We test on ourselves first. Always have, always will. If it doesn't meet our standards, it doesn't get sold.

### What We Test For

- **Durability** - Can it handle serious use?
- **Material quality** - Premium silicone only
- **Design** - Does it actually feel good?

That's the DONGCO difference.

![Workshop photo](assets/workshop-detail.jpg)

*Made by hardcore homos, for hardcore homos.*
```

### Step 4: Register Your Post

Open `blog.html` and find this line (around line 533):

```javascript
const blogPostFiles = [
    'blog/posts/2026-02-13-welcome.md'
];
```

Add your new file to the array:

```javascript
const blogPostFiles = [
    'blog/posts/2026-02-13-welcome.md',
    'blog/posts/2026-02-14-quality-standards.md'  // Your new post
];
```

### Step 5: Done!

Reload `blog.html` in your browser. Your new post will appear automatically!

---

## Markdown Formatting Guide

Here's what you can use in your blog posts:

### Headings
```markdown
# Big Heading (H1)
## Medium Heading (H2)
### Small Heading (H3)
```

### Text Formatting
```markdown
**bold text**
*italic text*
***bold and italic***
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3
```

### Links
```markdown
[Link text](https://url.com)
```

### Images
```markdown
![Alt text](path/to/image.jpg)
```

### Quotes
```markdown
> This is a quote
```

### Horizontal Line
```markdown
---
```

### Code
```markdown
Inline `code` looks like this

```
Code blocks
use triple backticks
```
```

---

## Quick Prompt for LLMs

**Copy and paste this to any LLM:**

```
Create a new blog post for the DONGCO website. Follow these steps:

1. Create a file in blog/posts/ named: YYYY-MM-DD-title.md
2. Add frontmatter at the top:
   ---
   title: [post title]
   author: [author name or "Rod & Hardy"]
   date: YYYY-MM-DD
   image: [optional image path or leave empty]
   ---
3. Write the content in Markdown format below the frontmatter
4. Update blog.html by adding the filename to the blogPostFiles array
5. Use DONGCO's bold, explicit, community-focused tone

Blog topic: [describe what you want]
Tone: Bold, direct, sexually explicit - matching DONGCO's brand (hardcore gay dildo company, 1978 SF Castro, by homos for homos)
```

---

## Example: Complete Blog Post File

**File:** `blog/posts/2026-02-15-size-guide.md`

```markdown
---
title: Size Matters: A Beginner's Guide
author: Hardy
date: 2026-02-15
image: assets/size-comparison.jpg
---

Let's talk about size. Not gonna sugarcoat it—choosing the wrong size can ruin your experience.

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

### Pro Tip

Girth matters more than length for most guys. A thick, shorter toy often feels better than a long, thin one.

---

Got questions? That's what we're here for.

*Built to last. Built to destroy. That's DONGCO.*
```

---

## Tips

✅ **DO:**
- Use descriptive filenames (include date)
- Write naturally in Markdown
- Add images for visual interest
- Keep DONGCO's bold voice
- Test locally before committing

❌ **DON'T:**
- Forget to update the blogPostFiles array
- Use HTML (stick to Markdown)
- Skip the frontmatter
- Use incorrect date format

---

## Need Help?

- **Markdown guide**: https://www.markdownguide.org/basic-syntax/
- **Check your post**: Just open blog.html in a browser
- **Troubleshooting**: Make sure the file is in `blog/posts/` and added to the `blogPostFiles` array

That's it! Drop a file, reload the page. Simple as that. 🔥
