"use client";

import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import FloatingButtons from '@/app/components/ui/FloatingButtons';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<LanguageProvider>
			<CartProvider>
				<div className="min-h-screen bg-gray-50 font-['Tajawal']">
					<Header />
					<main>{children}</main>
					<Footer />
					<FloatingButtons />
				</div>
			</CartProvider>
		</LanguageProvider>
	);
}
