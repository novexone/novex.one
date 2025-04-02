import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

function App() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-12">{t('hello')}</h1>
        
        <div className="flex gap-3 justify-center">
          <Button 
            variant="ghost" 
            onClick={() => changeLanguage('en')}
            className="text-white opacity-50 hover:opacity-100 hover:bg-zinc-800 transition-opacity duration-200"
          >
            English
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => changeLanguage('de')}
            className="text-white opacity-50 hover:opacity-100 hover:bg-zinc-800 transition-opacity duration-200"
          >
            Deutsch
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => changeLanguage('ru')}
            className="text-white opacity-50 hover:opacity-100 hover:bg-zinc-800 transition-opacity duration-200"
          >
            Русский
          </Button>
        </div>
      </div>
    </div>

    
  );
}

export default App;

