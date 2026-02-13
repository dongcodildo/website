/**
 * AI Chat Widget with Groq API Integration
 * Free AI service with fast inference
 */

class ChatWidget {
    constructor(config = {}) {
        // Configuration with defaults
        this.config = {
            apiKey: config.apiKey || 'YOUR_GROQ_API_KEY_HERE', // User needs to add their key
            model: config.model || 'mixtral-8x7b-32768', // Fast, capable model
            apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
            botName: config.botName || 'DONGCO AI',
            botAvatar: config.botAvatar || 'DC',
            userAvatar: config.userAvatar || 'YOU',
            welcomeMessage: config.welcomeMessage || "Hey! I'm your DONGCO AI assistant. How can I help you today?",
            systemPrompt: config.systemPrompt || "You are a helpful AI assistant for DONGCO. Be friendly, concise, and informative.",
            quickActions: config.quickActions || []
        };

        this.messages = [];
        this.isOpen = false;
        this.isTyping = false;
        
        this.init();
    }

    init() {
        this.injectHTML();
        this.attachEventListeners();
        this.addWelcomeMessage();
    }

    injectHTML() {
        const widgetHTML = `
            <div class="chat-widget" id="chatWidget">
                <!-- Chat Button -->
                <button class="chat-button" id="chatButton" aria-label="Open chat">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                        <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
                    </svg>
                </button>

                <!-- Chat Container -->
                <div class="chat-container" id="chatContainer">
                    <!-- Header -->
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div class="chat-avatar">${this.config.botAvatar}</div>
                            <div class="chat-header-text">
                                <h3>${this.config.botName}</h3>
                                <p>Online • Ready to help</p>
                            </div>
                        </div>
                        <button class="chat-close" id="chatClose" aria-label="Close chat">✕</button>
                    </div>

                    <!-- Messages -->
                    <div class="chat-messages" id="chatMessages">
                        <!-- Welcome message will be added here -->
                    </div>

                    <!-- Quick Actions (if provided) -->
                    ${this.config.quickActions.length > 0 ? `
                        <div class="quick-actions" id="quickActions">
                            ${this.config.quickActions.map(action => 
                                `<button class="quick-action-btn" data-message="${action}">${action}</button>`
                            ).join('')}
                        </div>
                    ` : ''}

                    <!-- Input -->
                    <div class="chat-input-container">
                        <input 
                            type="text" 
                            class="chat-input" 
                            id="chatInput" 
                            placeholder="Type your message..."
                            autocomplete="off"
                        />
                        <button class="chat-send-btn" id="chatSendBtn" aria-label="Send message">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }

    attachEventListeners() {
        const chatButton = document.getElementById('chatButton');
        const chatClose = document.getElementById('chatClose');
        const chatInput = document.getElementById('chatInput');
        const chatSendBtn = document.getElementById('chatSendBtn');

        chatButton.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.toggleChat());
        chatSendBtn.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Quick action buttons
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.target.getAttribute('data-message');
                this.sendMessage(message);
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.toggleChat();
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatContainer = document.getElementById('chatContainer');
        const chatButton = document.getElementById('chatButton');
        
        chatContainer.classList.toggle('active');
        chatButton.classList.toggle('active');

        if (this.isOpen) {
            document.getElementById('chatInput').focus();
        }
    }

    addWelcomeMessage() {
        this.addMessage('bot', this.config.welcomeMessage);
    }

    addMessage(type, content, timestamp = new Date()) {
        const messagesContainer = document.getElementById('chatMessages');
        const timeStr = timestamp.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit' 
        });

        const avatar = type === 'bot' ? this.config.botAvatar : this.config.userAvatar;
        
        const messageHTML = `
            <div class="message ${type}">
                <div class="message-avatar">${avatar}</div>
                <div>
                    <div class="message-content">${this.escapeHtml(content)}</div>
                    <div class="message-time">${timeStr}</div>
                </div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();

        // Store message in history
        this.messages.push({
            role: type === 'bot' ? 'assistant' : 'user',
            content: content
        });
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatMessages');
        const typingHTML = `
            <div class="message bot typing-indicator-wrapper">
                <div class="message-avatar">${this.config.botAvatar}</div>
                <div class="typing-indicator active">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator-wrapper');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    async sendMessage(customMessage = null) {
        const chatInput = document.getElementById('chatInput');
        const message = customMessage || chatInput.value.trim();

        if (!message) return;

        // Clear input
        if (!customMessage) {
            chatInput.value = '';
        }

        // Add user message
        this.addMessage('user', message);

        // Show typing indicator
        this.showTypingIndicator();

        // Disable input while processing
        const sendBtn = document.getElementById('chatSendBtn');
        sendBtn.disabled = true;
        chatInput.disabled = true;

        try {
            // Get AI response
            const response = await this.getAIResponse(message);
            
            // Hide typing indicator
            this.hideTypingIndicator();
            
            // Add bot response
            this.addMessage('bot', response);
        } catch (error) {
            console.error('Chat error:', error);
            this.hideTypingIndicator();
            this.showError('Sorry, I encountered an error. Please try again.');
        } finally {
            // Re-enable input
            sendBtn.disabled = false;
            chatInput.disabled = false;
            chatInput.focus();
        }
    }

    async getAIResponse(userMessage) {
        // Check if API key is configured
        if (this.config.apiKey === 'YOUR_GROQ_API_KEY_HERE') {
            return "⚠️ API key not configured. Please add your Groq API key to enable AI chat. Get a free key at: https://console.groq.com/keys";
        }

        try {
            const response = await fetch(this.config.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.config.apiKey}`
                },
                body: JSON.stringify({
                    model: this.config.model,
                    messages: [
                        {
                            role: 'system',
                            content: this.config.systemPrompt
                        },
                        ...this.messages.slice(-10) // Keep last 10 messages for context
                    ],
                    temperature: 0.7,
                    max_tokens: 1024,
                    top_p: 1,
                    stream: false
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'API request failed');
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Groq API Error:', error);
            throw error;
        }
    }

    showError(message) {
        const messagesContainer = document.getElementById('chatMessages');
        const errorHTML = `
            <div class="error-message">
                ${message}
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', errorHTML);
        this.scrollToBottom();
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Public method to update configuration
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }

    // Public method to clear chat history
    clearHistory() {
        this.messages = [];
        const messagesContainer = document.getElementById('chatMessages');
        messagesContainer.innerHTML = '';
        this.addWelcomeMessage();
    }
}

// Auto-initialize with default settings when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeChatWidget);
} else {
    initializeChatWidget();
}

function initializeChatWidget() {
    // Default configuration - user will customize this
    window.dongcoChat = new ChatWidget({
        botName: 'DONGCO AI',
        botAvatar: 'DC',
        welcomeMessage: "Hey! 👋 I'm your DONGCO AI assistant. How can I help you today?",
        systemPrompt: "You are a helpful AI assistant. Be friendly, concise, and informative. Keep responses under 150 words unless more detail is requested.",
        quickActions: [
            "What products do you offer?",
            "Tell me about shipping",
            "How can I contact support?"
        ]
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChatWidget;
}
