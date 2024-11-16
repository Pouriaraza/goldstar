"use client"
import './styles.scss';


export default function RootLayout({ children }) {
    return (
        <html>
            <head></head>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
