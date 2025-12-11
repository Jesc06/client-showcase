import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is my crypto safe with this wallet?',
    answer: 'Yes! We use industry-leading encryption and non-custodial storage, meaning only you have access to your private keys. We never store your passwords or recovery phrases.'
  },
  {
    question: 'Which cryptocurrencies are supported?',
    answer: 'We support a wide range of cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and many others. We\'re constantly adding support for new tokens based on user demand.'
  },
  {
    question: 'How can I restore my wallet?',
    answer: 'You can restore your wallet using your 12 or 24-word recovery phrase. Simply select "Restore Wallet" when opening the app and enter your recovery phrase to regain access to your funds.'
  },
  {
    question: 'How long do transactions take?',
    answer: 'Transaction times vary by blockchain. Bitcoin transactions typically take 10-60 minutes, while Ethereum and other chains can be much faster. Network congestion can affect these times.'
  },
  {
    question: 'Are there any fees for using this wallet?',
    answer: 'The wallet itself is free to use. However, you\'ll need to pay network fees (gas fees) when making transactions. These fees go to the blockchain network, not to us.'
  },
  {
    question: 'Can I use this wallet for NFTs?',
    answer: 'Yes! Our wallet fully supports NFTs on compatible blockchains. You can store, view, send, and receive NFTs directly from the wallet interface.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-sage-100 dark:bg-dark-card relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-white dark:bg-dark-bg border border-sage-300 dark:border-dark-border rounded-full">
            <span className="text-sm font-medium text-sage-700 dark:text-sage-300">FAQ</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Frequently<br />
            asked questions
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We have some answers to the most<br />
            commonly asked questions
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between p-6 bg-white dark:bg-dark-bg rounded-2xl border-2 border-sage-200 dark:border-dark-border hover:border-lime transition-all">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-sm font-bold text-gray-400 dark:text-gray-600 min-w-[2rem]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-lime flex items-center justify-center flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus size={20} className="text-gray-900" />
                    ) : (
                      <Plus size={20} className="text-gray-900" />
                    )}
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 ml-14">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Still have questions?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-lime text-gray-900 font-bold rounded-lg shadow-lg hover:bg-lime-light transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
