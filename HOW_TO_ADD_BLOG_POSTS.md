# How to Add Blog Posts to DONGCO Blog

## Instructions for LLMs (or Humans!)

When you need to add a new blog post to the DONGCO website, follow these simple steps:

### Step 1: Open the blog-posts.json file

The file is located at: `blog-posts.json`

### Step 2: Add your new blog post to the JSON array

Add a new object to the array with the following format:

```json
{
  "id": [next available number],
  "title": "Your Blog Post Title",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "content": "Your blog post content here.\n\nUse double line breaks (\\n\\n) to separate paragraphs.\n\nEach paragraph will be automatically formatted.",
  "excerpt": "A brief summary of the post for future use."
}
```

### Step 3: Important Formatting Rules

**✅ DO:**
- Use YYYY-MM-DD format for dates (e.g., "2026-02-13")
- Separate paragraphs with `\n\n` (double newline)
- Keep the excerpt short (1-2 sentences)
- Increment the ID number (check the highest existing ID and add 1)
- Add your post at the END of the array (before the closing `]`)

**❌ DON'T:**
- Use HTML in the content (plain text only)
- Forget the comma after the previous post's closing `}`
- Use special characters without escaping (use `\"` for quotes inside content)

### Step 4: Example

Here's a complete example showing how to add a new post:

**BEFORE:**
```json
[
  {
    "id": 1,
    "title": "Welcome to DONGCO",
    "author": "Rod & Hardy",
    "date": "2026-02-13",
    "content": "Welcome message here.",
    "excerpt": "Welcome post"
  }
]
```

**AFTER (with new post added):**
```json
[
  {
    "id": 1,
    "title": "Welcome to DONGCO",
    "author": "Rod & Hardy",
    "date": "2026-02-13",
    "content": "Welcome message here.",
    "excerpt": "Welcome post"
  },
  {
    "id": 2,
    "title": "Product Quality Standards",
    "author": "Rod & Hardy",
    "date": "2026-02-14",
    "content": "At DONGCO, quality isn't negotiable. Every toy we make goes through rigorous testing.\n\nWe test on ourselves first. Always have, always will. If it doesn't meet our standards, it doesn't get sold.\n\nThat's the DONGCO difference.",
    "excerpt": "How we maintain our legendary quality standards."
  }
]
```

### Quick Prompt for LLMs

**Copy and paste this prompt to any LLM:**

```
Add a new blog post to the DONGCO blog. Here's what you need to know:

1. Open the file: blog-posts.json
2. Add a new entry with this exact JSON format:
   {
     "id": [next number],
     "title": "[post title]",
     "author": "[your name or 'Rod & Hardy']",
     "date": "YYYY-MM-DD",
     "content": "[content with \\n\\n between paragraphs]",
     "excerpt": "[short summary]"
   }
3. Add a comma after the previous post's closing }
4. The post will automatically appear on the blog page

Blog topic: [describe what you want the blog post about]
Tone: Bold, explicit, community-focused - matching DONGCO's brand (hardcore gay dildo company founded in 1978 SF Castro by Rod & Hardy)
```

### Testing Your Post

After adding the post:
1. Save the `blog-posts.json` file
2. Open `blog.html` in your browser
3. Your post should appear automatically (newest posts show first)

### Troubleshooting

**Post not showing?**
- Check for JSON syntax errors (missing commas, brackets)
- Make sure date format is correct (YYYY-MM-DD)
- Verify the file saved properly

**Formatting looks wrong?**
- Use `\n\n` for paragraph breaks, not `\n` or `<br>`
- Don't use HTML tags in content
- Keep paragraphs plain text

---

## Need Help?

If you encounter issues, check:
1. JSON is valid (use a JSON validator online)
2. All required fields are present
3. Date format is correct
4. No trailing commas after the last post

That's it! The blog page will automatically load and display your posts sorted by date (newest first).
