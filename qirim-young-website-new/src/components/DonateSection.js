"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const DonateSection = () => {
    const donationOptions = [
        { amount: 50, description: 'Bir aylık hosting masrafı' },
        { amount: 150, description: 'Yeni dil teknolojisi geliştirme' },
        { amount: 300, description: 'Eğitim materyalleri oluşturma' },
        { amount: 500, description: 'Büyük proje finansmanı' }
    ];
    return (<section id="donate" className="py-24 bg-gradient-to-br from-heritage-gold/5 to-crimean-100/50">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-heritage-gold/10 px-4 py-2 rounded-full mb-6">
            <lucide_react_1.Heart className="w-4 h-4 text-heritage-gold"/>
            <span className="text-sm font-medium text-crimean-700">Yardım Et</span>
          </div>
          
          <h2 className="text-4xl font-bold text-crimean-800 font-crimean-head mb-6">
            Medeniıetimizi Birlikte
            <span className="block text-heritage-gold">Yaşatalım</span>
          </h2>
          
          <p className="text-xl text-crimean-600 max-w-3xl mx-auto">
            Qırımtatar dilini ve medeniıetini gelecek nesillere aktarmak için 
            destegınıza ihtiyacımız var.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Donation Amounts */}
            <div className="card">
              <h3 className="text-xl font-bold text-crimean-800 font-crimean-head mb-6">
                Bagış Seçenekleri
              </h3>
              <div className="space-y-4">
                {donationOptions.map((option, index) => (<div key={index} className="flex items-center justify-between p-4 bg-crimean-50 rounded-lg hover:bg-crimean-100 transition-colors cursor-pointer">
                    <div>
                      <div className="font-bold text-heritage-gold">${option.amount}</div>
                      <div className="text-sm text-crimean-600">{option.description}</div>
                    </div>
                    <lucide_react_1.CreditCard className="w-5 h-5 text-crimean-400"/>
                  </div>))}
              </div>
              <button className="btn-primary w-full mt-6">
                Bagış Yap
              </button>
            </div>

            {/* Other Ways to Help */}
            <div className="card">
              <h3 className="text-xl font-bold text-crimean-800 font-crimean-head mb-6">
                Başqa Yardım Yolları
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <lucide_react_1.Gift className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-medium text-crimean-800">Gönüllü Olun</h4>
                    <p className="text-sm text-crimean-600">Projelerimizde aktif rol alın</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <lucide_react_1.Banknote className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-medium text-crimean-800">Kurumsal Destek</h4>
                    <p className="text-sm text-crimean-600">Şirketınız için sponsorluk fırsatları</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <lucide_react_1.Heart className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-1"/>
                  <div>
                    <h4 className="font-medium text-crimean-800">Sosyal Medyada Paylaşın</h4>
                    <p className="text-sm text-crimean-600">Misyonumuzu daha fazla kişiye ulaştırın</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transparency */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-crimean-800 font-crimean-head mb-4">
              Şeffaflık Taahhüdımız
            </h3>
            <p className="text-crimean-600 mb-6">
              Tüm bagışlar dogrudan proje geliştirme, hosting masrafları ve 
              eğitim materyalleri oluşturmada kullanılır.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-2xl font-bold text-heritage-gold">70%</div>
                <div className="text-crimean-600">Proje Geliştirme</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-heritage-gold">20%</div>
                <div className="text-crimean-600">Teknik Altyapı</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-heritage-gold">10%</div>
                <div className="text-crimean-600">İdari Giderler</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
exports.default = DonateSection;
