import { ICoffeeSorts, SelectedPage } from '@/types'
import { motion } from 'framer-motion'
import temp_image from '@/assets/temp/cappucino.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const coffee_sorts: Array<ICoffeeSorts> = [
  {
    image: temp_image,
    name: 'Cappuccino',
    scale: 180,
    price: 2,
    description: "1/3 espresso, 1/3 hot milk and 1/3 milk foam",
  },
  {
    image: temp_image,
    name: 'Flat white',
    scale: 220,
    price: 3,
    description: "50-160 ml of milk (before foaming) and 58-60 ml of doppio.",
  },
  {
    image: temp_image,
    name: 'Cinnamon',
    scale: 180,
    price: 2.5,
    description: "1/4 teaspoon ground cinnamon Sugar/honey to tasteWhipped cream",
  },
  {
    image: temp_image,
    name: 'Espresso',
    scale: 180,
    price: 2,
    description: "7 to 9 grams of ground coffee and about 30 ml of water.",
  },
  {
    image: temp_image,
    name: 'Latte',
    scale: 180,
    price: 3,
    description: "1/3 coffee and 2/3 milk..",
  },
  {
    image: temp_image,
    name: 'Cappuccino',
    scale: 180,
    price: 2,
    description: "1/3 espresso, 1/3 hot milk and 1/3 milk foam",
  },
  {
    image: temp_image,
    name: 'Flat white',
    scale: 220,
    price: 3,
    description: "50-160 ml of milk (before foaming) and 58-60 ml of doppio.",
  },
  {
    image: temp_image,
    name: 'Cinnamon',
    scale: 180,
    price: 2.5,
    description: "1/4 teaspoon ground cinnamon Sugar/honey to tasteWhipped cream",
  },
  {
    image: temp_image,
    name: 'Espresso',
    scale: 180,
    price: 2,
    description: "7 to 9 grams of ground coffee and about 30 ml of water.",
  },
  {
    image: temp_image,
    name: 'Latte',
    scale: 180,
    price: 3,
    description: "1/3 coffee and 2/3 milk..",
  },
]

const CoffeeList = ({ setSelectedPage }: Props) => {
  return (
    <section id='menu' className='w-full flex justify-center py-20 3xl:pb-36 px-10 border-b-2 border-b-gray-300'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Menu)}
        className='flex flex-col gap-10 xl:w-5/6'
      >
        <h1 className='text-center font-medium text-2xl'>Menu</h1>
        <ul className='flex flex-row flex-wrap justify-between  items-center gap-y-20 gap-x-10'>
          {coffee_sorts.map((coffee, index) => (
            <li key={index} className='w-[118px] lg:w-[200px] 4xl:w-[232px] h-[180px] lg:h-[290px] text-xs flex flex-col justify-start items-start'>
              <img className='w-full' src={coffee.image} alt="image" />
                <div className='text-primary w-full flex flex-col lg:gap-3'>

                  <div className='flex flex-row justify-between items-center lg:mt-3'>
                    <p className='font-semibold text-[10px] lg:text-[21px]'>{coffee.name}</p>
                    <p className='font-semibold text-[10px] lg:text-[21px]'>{coffee.price}$</p>
                  </div>

                  <p className='text-[10px] lg:text-[21px]'>{coffee.scale}ml</p>
                  <p className='mt-2 lg:mt-0 text-[10px] lg:text-[17px]'>{coffee.description}</p>
                </div>
            </li>
          ))}
        </ul>

      </motion.div>
    </section>
  )
}

export default CoffeeList