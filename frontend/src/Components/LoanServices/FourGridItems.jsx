import FirstFeatureItem from '../../assets/Icons/FirstFeatureItem.svg'
import ThirdtFeatureItem from '../../assets/Icons/ThirdFeatureItem.svg'
import SecondFeatureItem from '../../assets/Icons/SecondFearureItem.svg'
import FourthFeatureItem from '../../assets/Icons/FourFeatureItem.svg'

function FeaturesGrid() {
    const features = [
      {
        icon: FirstFeatureItem,
        title: "No hidden fees",
        description: "Borrowers only pay the amount they owe."
      },
      {
        icon: SecondFeatureItem,
        title: "Get money in 24 hours",
        description: "Apply and get credited in 24 hours. It's that easy!"
      },
      {
        icon: ThirdtFeatureItem,
        title: "Competitive rates",
        description: "With our loans, borrowers are rest assured to get the best rates."
      },
      {
        icon: FourthFeatureItem,
        title: "Flexible loan tenures",
        description: "With our flexible loan scheme, you can select an option that best suits your needs."
      }
    ];
  
    return (
      <div className="py-24 px-6 lg:px-32 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-10">
              <div className="flex-shrink-0">
                <img src={feature.icon} className='h-12 w-12' />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FeaturesGrid;
  