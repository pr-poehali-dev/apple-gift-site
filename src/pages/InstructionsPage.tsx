import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstructionStep from "@/components/InstructionStep";
import { CreditCard, Gift, ShoppingBag } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InstructionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-apple-light py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-medium mb-4">Как использовать Apple Gift Card</h1>
              <p className="text-apple-gray text-lg">
                Простое руководство по активации и использованию подарочной карты Apple.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
              <InstructionStep 
                number={1}
                title="Приобретите карту"
                description="Выберите номинал и оплатите удобным способом"
                icon={<ShoppingBag className="h-8 w-8 text-apple-blue" />}
              />
              
              <InstructionStep 
                number={2}
                title="Получите код"
                description="Код карты будет отправлен на вашу электронную почту"
                icon={<Gift className="h-8 w-8 text-apple-blue" />}
              />
              
              <InstructionStep 
                number={3}
                title="Активируйте"
                description="Войдите в свой Apple ID и активируйте код в App Store"
                icon={<CreditCard className="h-8 w-8 text-apple-blue" />}
              />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-medium mb-6 text-center">Часто задаваемые вопросы</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">Как активировать подарочную карту?</AccordionTrigger>
                  <AccordionContent>
                    Для активации подарочной карты Apple откройте App Store на своём устройстве, нажмите на свою учётную запись, затем выберите «Пополнить счёт» и введите код с карты.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">Что можно купить с помощью карты?</AccordionTrigger>
                  <AccordionContent>
                    С помощью Apple Gift Card вы можете приобретать приложения, игры, музыку, фильмы, книги, подписки на Apple Music, Apple TV+, Apple Arcade и другие сервисы Apple.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">Есть ли срок действия у подарочной карты?</AccordionTrigger>
                  <AccordionContent>
                    Нет, подарочные карты Apple не имеют срока действия. Вы можете использовать их в любое удобное время.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-apple-light">
          <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6">Нужна помощь?</h2>
            <p className="text-apple-gray mb-8">
              Если у вас возникли вопросы по использованию Apple Gift Card, обратитесь в нашу службу поддержки.
            </p>
            <a 
              href="mailto:support@applegiftcard.ru" 
              className="text-apple-blue hover:underline font-medium"
            >
              Связаться с поддержкой
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstructionsPage;
