import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { MessageCircle, Send, Trash2, X } from 'lucide-react';
import { knowledgeBase } from './knowledgeBase';

interface Message {
  id: number;
  text: string;
  from: 'user' | 'bot';
}

const GREETING =
  "Hi! I'm the Carbon Atlas assistant. Ask me about the calculator, your report, or any carbon-footprint concept.";

const SUGGESTIONS = [
  'How do I start?',
  'What is tCO₂e?',
  'How do I print my report?',
  'How can I reduce emissions?',
];

const FALLBACK =
  "Hmm, I'm not sure about that one yet. Try asking about starting the assessment, your carbon report, tCO₂e, direct vs indirect emissions, recommendations, or printing. You can also just say hi. 🙂";

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Smart keyword matching:
 *  - Short single words ("hi", "ok", "bye") must match on a word boundary.
 *  - Multi-word phrases use plain substring matching.
 * This prevents "hi" from matching inside "this" or "ok" inside "cooking".
 */
function matchesKeyword(text: string, keyword: string): boolean {
  const needsBoundary = keyword.length <= 4 && !keyword.includes(' ');
  if (!needsBoundary) return text.includes(keyword);
  const re = new RegExp(`(^|\\W)${escapeRegex(keyword)}(\\W|$)`, 'i');
  return re.test(text);
}

/**
 * Score each matching rule by the length of its matched keyword.
 * Longer keyword = more specific = wins. So "how do i start"
 * beats the generic "hi" greeting rule.
 */
function getBotReply(userText: string): string {
  const text = userText.toLowerCase().trim();
  let best: { score: number; response: string } | null = null;

  for (const entry of knowledgeBase) {
    for (const kw of entry.keywords) {
      if (matchesKeyword(text, kw)) {
        const score = kw.length;
        if (!best || score > best.score) {
          best = { score, response: entry.response };
        }
      }
    }
  }

  return best ? best.response : FALLBACK;
}

export default function CarbonChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: GREETING, from: 'bot' },
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const send = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = { id: Date.now(), text: trimmed, from: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const delay = 500 + Math.random() * 400;
    timeoutRef.current = window.setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getBotReply(trimmed),
        from: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      timeoutRef.current = null;
    }, delay);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const clearChat = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsTyping(false);
    setMessages([{ id: Date.now(), text: GREETING, from: 'bot' }]);
  };

  const showSuggestions =
    messages.length === 1 && messages[0].from === 'bot' && !isTyping;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-ca-lime)] text-[var(--color-ca-main)] shadow-lg transition-transform hover:scale-105 no-print"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-[9999] flex h-[520px] w-[380px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-[#23382D] bg-[var(--color-ca-panel)] shadow-2xl no-print">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#23382D] bg-[var(--color-ca-elevated)] px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ca-lime)] text-[var(--color-ca-main)]">
              <MessageCircle size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--color-ca-text-primary)]">
                Carbon Atlas Assistant
              </p>
              <p className="text-xs text-[var(--color-ca-text-secondary)]">
                {isTyping ? 'Typing…' : 'Online — ask me anything'}
              </p>
            </div>
            <button
              type="button"
              onClick={clearChat}
              className="text-[var(--color-ca-text-secondary)] hover:text-[var(--color-ca-text-primary)]"
              aria-label="Clear chat"
              title="Clear chat"
            >
              <Trash2 size={16} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[var(--color-ca-text-secondary)] hover:text-[var(--color-ca-text-primary)]"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-[var(--color-ca-lime)] text-[var(--color-ca-main)]'
                      : 'bg-[var(--color-ca-elevated)] text-[var(--color-ca-text-primary)] border border-[#23382D]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-[#23382D] bg-[var(--color-ca-panel)] px-3 py-1.5 text-xs text-[var(--color-ca-text-secondary)] transition-colors hover:border-[var(--color-ca-lime)] hover:text-[var(--color-ca-text-primary)]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-xl border border-[#23382D] bg-[var(--color-ca-elevated)] px-3 py-3">
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-[var(--color-ca-text-secondary)] animate-bounce"
                    style={{ animationDelay: '0ms', animationDuration: '900ms' }}
                  />
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-[var(--color-ca-text-secondary)] animate-bounce"
                    style={{ animationDelay: '150ms', animationDuration: '900ms' }}
                  />
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-[var(--color-ca-text-secondary)] animate-bounce"
                    style={{ animationDelay: '300ms', animationDuration: '900ms' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-[#23382D] bg-[var(--color-ca-elevated)] px-3 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 rounded-lg border border-[#23382D] bg-[var(--color-ca-panel)] px-3 py-2 text-sm text-[var(--color-ca-text-primary)] placeholder:text-[var(--color-ca-text-secondary)] focus:border-[var(--color-ca-lime)] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => send(input)}
              disabled={!input.trim() || isTyping}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-ca-lime)] text-[var(--color-ca-main)] transition-opacity disabled:opacity-40"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}