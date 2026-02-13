# AI Chat Widget Setup Guide

## 🤖 Overview
Your DONGCO website now has an AI-powered chat widget at the bottom left corner. The chat uses **Groq** - a free, fast AI service.

## 🎯 Quick Start

### Step 1: Get Your Free Groq API Key

1. **Visit Groq Console**: Go to [https://console.groq.com](https://console.groq.com)
2. **Sign Up/Login**: Create a free account (no credit card required!)
3. **Create API Key**: 
   - Navigate to "API Keys" section
   - Click "Create API Key"
   - Copy your key (it looks like: `gsk_...`)

### Step 2: Add Your API Key

Open `chat-widget.js` and find this line (around line 10):
```javascript
apiKey: config.apiKey || 'YOUR_GROQ_API_KEY_HERE',
```

Replace `'YOUR_GROQ_API_KEY_HERE'` with your actual key:
```javascript
apiKey: config.apiKey || 'gsk_your_actual_key_here',
```

### Step 3: Test It Out!

Open `index.html` in your browser and click the chat icon at the bottom left. The AI assistant is now ready to help your visitors!

---

## 🎨 Customizing Chat Behavior

### Option 1: Edit Directly in chat-widget.js

Find the `initializeChatWidget()` function at the bottom of `chat-widget.js` and modify these settings:

```javascript
function initializeChatWidget() {
    window.dongcoChat = new ChatWidget({
        // Bot identity
        botName: 'DONGCO AI',
        botAvatar: 'DC',
        
        // Welcome message shown when chat opens
        welcomeMessage: "Hey! 👋 I'm your DONGCO AI assistant. How can I help you today?",
        
        // System prompt - MOST IMPORTANT for chat behavior
        systemPrompt: "You are a helpful AI assistant. Be friendly, concise, and informative.",
        
        // Quick action buttons
        quickActions: [
            "What products do you offer?",
            "Tell me about shipping",
            "How can I contact support?"
        ]
    });
}
```

### Option 2: Add Custom Configuration in Your HTML

Add this script **BEFORE** the `<script src="chat-widget.js">` line:

```html
<script>
    // Configure chat before it loads
    window.chatConfig = {
        botName: 'Your Custom Name',
        botAvatar: 'YC',
        welcomeMessage: "Your custom welcome message!",
        systemPrompt: "Your detailed instructions for how the AI should behave...",
        quickActions: [
            "Custom question 1",
            "Custom question 2",
            "Custom question 3"
        ]
    };
</script>
<script src="chat-widget.js"></script>
```

---

## 🎭 Crafting the Perfect System Prompt

The `systemPrompt` is the **most important** setting - it defines how your AI assistant behaves!

### Example Prompts:

#### Professional & Helpful
```javascript
systemPrompt: `You are the DONGCO customer service assistant. 
Be professional, friendly, and helpful. 
Answer questions about products, shipping, returns, and general inquiries.
Keep responses concise (under 150 words).
If you don't know something, suggest they contact support@dongco.com`
```

#### Edgy & Brand-Aligned (matches DONGCO vibe)
```javascript
systemPrompt: `You're the DONGCO AI - bold, direct, and no-nonsense. 
You're here to help customers find exactly what they need.
Be friendly but unapologetically confident. 
Match DONGCO's bold brand personality.
Keep it real, keep it short.
Know the products: heavy-duty silicone toys since 1978.
Free shipping over $50, 30-day returns.`
```

#### Sales-Focused
```javascript
systemPrompt: `You're a DONGCO sales assistant. 
Guide customers to the right products based on their needs.
Highlight quality, durability, and satisfaction guarantee.
Recommend complementary products.
Create urgency with current promotions.
Always close with a call-to-action.`
```

#### Humorous & Casual
```javascript
systemPrompt: `You're the fun, laid-back DONGCO chat buddy.
Answer questions with personality and occasional humor.
Be conversational and relatable.
Help customers without being pushy.
Emoji usage is encouraged but don't overdo it 😉`
```

---

## ⚙️ Configuration Options Reference

| Option | Default | Description |
|--------|---------|-------------|
| `apiKey` | Required | Your Groq API key |
| `model` | `mixtral-8x7b-32768` | AI model to use (Mixtral is fast & capable) |
| `botName` | `DONGCO AI` | Name shown in chat header |
| `botAvatar` | `DC` | 2-3 letters shown in bot avatar |
| `userAvatar` | `YOU` | 2-3 letters shown in user avatar |
| `welcomeMessage` | Default greeting | First message users see |
| `systemPrompt` | Basic helper prompt | Instructions for AI behavior |
| `quickActions` | `[]` | Array of suggested questions |

### Available AI Models (Groq)

- `mixtral-8x7b-32768` - Fast, balanced (RECOMMENDED)
- `llama3-70b-8192` - More capable, slightly slower
- `llama3-8b-8192` - Fastest, good for simple queries
- `gemma-7b-it` - Lightweight alternative

---

## 🎨 Styling Customization

The chat widget matches your DONGCO brand colors! To further customize:

1. Open `chat-widget.css`
2. Modify colors in the CSS classes
3. The widget uses gradients matching your site theme:
   - Primary: `#FF006E`
   - Secondary: `#8338EC`
   - Accent: `#FB5607`

---

## 📱 Features

✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Animated** - Smooth transitions and typing indicators  
✅ **Keyboard Shortcuts** - Press `Escape` to close chat  
✅ **Context Aware** - Remembers last 10 messages  
✅ **Error Handling** - Graceful fallbacks if API fails  
✅ **Quick Actions** - Pre-defined questions for easy interaction  

---

## 🔧 Advanced Usage

### Updating Configuration Programmatically
```javascript
// Access the chat instance
window.dongcoChat.updateConfig({
    systemPrompt: "New behavior instructions..."
});
```

### Clearing Chat History
```javascript
window.dongcoChat.clearHistory();
```

### Checking if Chat is Open
```javascript
console.log(window.dongcoChat.isOpen); // true or false
```

---

## 🚀 Next Steps

1. **Get your Groq API key** (takes 2 minutes!)
2. **Add it to `chat-widget.js`**
3. **Customize the system prompt** to match your brand voice
4. **Test the chat** with different questions
5. **Iterate** - refine the system prompt based on responses

---

## 🆘 Troubleshooting

### Chat shows "API key not configured"
- Make sure you replaced `YOUR_GROQ_API_KEY_HERE` with your actual key
- Key should start with `gsk_`

### Chat not appearing
- Check browser console for errors
- Ensure `chat-widget.css` and `chat-widget.js` are in the same folder as your HTML
- Verify the script tags are at the bottom of `<body>`

### AI responses are slow
- Try switching to a faster model like `llama3-8b-8192`
- Groq is usually very fast - check your internet connection

### AI gives wrong information
- Refine your `systemPrompt` with more specific instructions
- Add information about your products, policies, etc.
- The AI only knows what you tell it in the system prompt

---

## 📚 Resources

- **Groq Documentation**: [https://console.groq.com/docs](https://console.groq.com/docs)
- **Groq API Keys**: [https://console.groq.com/keys](https://console.groq.com/keys)
- **Model Playground**: Test prompts at [https://console.groq.com/playground](https://console.groq.com/playground)

---

## 💡 Pro Tips

1. **Test your system prompt** in the Groq playground before implementing
2. **Keep responses short** - mention this in your system prompt
3. **Add product knowledge** - include key info about your offerings
4. **Update regularly** - refine based on actual customer interactions
5. **Monitor usage** - Groq console shows your API usage

---

**Ready to customize?** Now it's your turn! Tell me how you want the chat agent to behave, and I'll help you craft the perfect system prompt! 🎯
