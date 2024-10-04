import { useState, useEffect } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    // Función para cambiar el tema
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        // Comprobar el tema guardado o la preferencia del sistema
        const currentTheme = theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }, [theme]);

    return [theme, toggleTheme];
};

const Header = () => {
    const [theme, toggleTheme] = useTheme();

    return (
        <header className="bg-Very-Pale-Blue  dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px]
         pt-8 px-6  md:mb-[550px] lg:mb-[200px]  mb-[1100px] ">
            <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">
                Social Media Dashboard
            </h1>
            <p className="text-Dark-Grayish-Blue font-bold mb-6 dark:text-Desaturated-Blue">Total Followers: 23,004</p>
            <hr className="bg-black mb-[19px]" />

            <div className="flex justify-between">
                <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
                <label htmlFor="darkmode" className="relative cursor-pointer border bg-Toggle peer-checked:bg-Toggle-Gradient w-12 h-6 rounded-full overflow-hidden p-[3px] pb-[22px]">
                    <input 
                        onClick={toggleTheme} 
                        type="checkbox" 
                        id="darkmode" 
                        className="sr-only peer" 
                        checked={theme === 'dark'}
                        readOnly
                    />
                    <div className="absolute top-0 left-0 w-full h-full peer-checked:bg-Toggle-Gradient  "></div>
                    <div className="bg-Light-Grayish-Blue w-[18px] h-[18px] rounded-xl peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>
    );
};

export default Header;
