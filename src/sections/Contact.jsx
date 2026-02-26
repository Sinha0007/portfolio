import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Linkedin } from 'lucide-react';

export const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('loading');
        setTimeout(() => setFormState('success'), 2000); // Simulate API call
    };

    const contactMethod = [
        { icon: <Mail size={20} />, label: 'Email', value: 'pranabsinha80@gmail.com', href: 'mailto:pranabsinha80@gmail.com' },
        { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Pranab Sinha', href: 'https://linkedin.com/in/pranab-sinha07/' },
        { icon: <MapPin size={20} />, label: 'Location', value: 'Bangalore, India', href: '#' },
    ];

    return (
        <section id="contact" className="py-32 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

                    <div className="lg:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                                Let's build <br />
                                <span className="gradient-text">the future.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Have a project in mind or just want to chat about development? Feel free to reach out. I'm always open to new opportunities.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {contactMethod.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-5 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
                                        <p className="text-lg text-white font-medium group-hover:text-primary transition-colors">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        className="lg:col-span-3 bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] px-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] px-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] px-1">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows="5"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState === 'loading' || formState === 'success'}
                                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 transition-all duration-500 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 group"
                            >
                                <AnimatePresence mode="wait">
                                    {formState === 'idle' && (
                                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                                            Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </motion.div>
                                    )}
                                    {formState === 'loading' && (
                                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending
                                        </motion.div>
                                    )}
                                    {formState === 'success' && (
                                        <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 text-white">
                                            <CheckCircle2 size={24} /> Message Sent
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

