type InstructionStepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const InstructionStep = ({ number, title, description, icon }: InstructionStepProps) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute -top-5 flex items-center justify-center w-10 h-10 rounded-full bg-apple-blue text-white font-bold">
        {number}
      </div>
      <div className="mt-6 text-apple-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-apple mb-2">{title}</h3>
      <p className="text-apple-gray text-center">{description}</p>
    </div>
  );
};

export default InstructionStep;