import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Get Lean & Tone Up FAST with These High-Intensity Workouts You Can Do at Home in Less Than 30 Minutes with Just a Pair of Dumbbells!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
    description:" Enjoy yoga your way, on your schedule. Stream or download our online yoga classes offered by highly qualified, enthusiastic teachers.",
  },
  {
    name: "Ab Core Classes",
    description:
      "The best way to train your abs is to concentrate on tightening your abdominal muscles through exercises like crunches and leg raises. ",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
    description:
      "Get Adventure Ready for your best ski season yet! We focus on improving your hip and core power and anaerobic endurance specifically for skiing.",
  },
  {
    name: "Fitness Classes",
    image: image5,
    description:"Keep things fresh and fun with hundreds of classes to choose from every week. HIIT, barre, weight training and more.",
  },
  {
    name: "Training Classes",
    description:
      "Fitness training balances five elements of good health. Make sure your routine includes aerobic fitness, strength training, core exercises, balance training, and flexibility and stretching.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            We are nurturers: we seek only to encourage, entertain, and empower.Here we keep open minds. There is no one type or way in our diverse community. Come as you are!We know serious fitness is hard, but that doesn’t mean it can’t be an edge-of-your-seat, can’t-get-enough, look-forward-to-your-workouts party.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;