import React from 'react'

export default function Politics() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Privacy Policy Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-text-main mb-6 text-right">
          سياسه الخصوصية
        </h1>
        <div className="space-y-6 text-right text-gray-700 leading-relaxed">
          <p className="text-lg break-words whitespace-normal">
            في سافر، نعطي الأولوية لحماية خصوصية الأفراد الذين يستخدمون خدماتنا ومواقعنا الإلكترونية.
          </p>
          <p className="text-lg break-words whitespace-normal">
            تهدف سياسة الخصوصية هذه إلى توضيح كيفية جمعنا للمعلومات الشخصية واستخدامها وحمايته.
          </p>
          
          <div className="bg-green-50 p-6 rounded-lg space-y-4">
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">استخدام المعلومات: نستخدم المعلومات الشخصية لتوفير الخدمات وتعزيزها، والتواصل مع المستخدمين، وضمان أمن وحماية مواردهم الشخصية.</p>
            </div>
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">مشاركة المعلومات: نحن لا نشارك المعلومات الشخصية مع أطراف اخري ما لم يتم الحصول على موافقة صريحة من المستخدم أو بناءً على المتطلبات القانونية.</p>
            </div>
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">حماية المعلومات: نحن نتخذ التدابير الأمنية اللازمة لحماية المعلومات الشخصية من الوصول والاستخدام غير المصرح به.</p>
            </div>
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">الامتثال والتحديثات: نحن نلتزم بالقوانين واللوائح المعمول بها فيما يتعلق بحماية البيانات الشخصية، ونقوم بمراجعة سياسات الخصوصية وتحديثها بانتظام لضمان الامتثال لأحدث المعايير.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms of Use Section */}
      <div>
        <h1 className="text-3xl font-bold text-main mb-6 text-right">
          شروط الاستخدام
        </h1>
        <div className="space-y-6 text-right text-gray-700 leading-relaxed">
          <p className="text-lg break-words whitespace-normal whitespace-normal">
            نسعى في سافر ضمان تجربة مستخدم سلسة وآمنة لجميع مستخدمي خدماتنا ومواقعنا الإلكترونية. تهدف سياسة شروط الاستخدام هذه إلى تحديد القواعد والشروط الواجب اتباعها أثناء استخدام خدماتنا.
          </p>
          
          <div className="bg-green-50 p-6 rounded-lg space-y-4">
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">يجب على جميع المستخدمين الالتزام بالشروط والأحكام المحددة لاستخدام خدماتنا، بما في ذلك القوانين واللوائح المعمول بها.</p>
            </div>
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">سلوك المستخدم: يجب على المستخدمين الامتناع عن الانخراط في أي أنشطة غير قانونية أو ضارة أو مسيئة تجاه الآخرين أو تجاه شركتنا.</p>
            </div>
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">الحماية والأمان: يجب على المستخدمين الحفاظ على سرية معلومات حساباتهم والامتناع عن مشاركتها مع الآخرين لضمان الحماية والأمان.</p>
            </div>
            <div className="flex gap-2 align-middle content-center items-center">
              <span className="text-green-800 flex-shrink-0">•</span>
              <p className="break-words whitespace-normal">التعديلات والتحديثات: نحتفظ بالحق في تعديل شروط الاستخدام وسياساته بشكل دوري، ويتعين على المستخدمين مراجعة التحديثات والتعديلات.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
