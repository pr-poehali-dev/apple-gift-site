import { ReactNode } from "react";

interface InstructionStepProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const InstructionStep = ({ number, title, description, icon }: InstructionStepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center bg-apple-light rounded-full mb-4">
        {icon}
      </div>
      <div className="mb-2 flex items-center justify-center w-8 h-8 rounded-full bg-apple-blue text-white text-sm font-medium">
        {number}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-apple-gray">{description}</p>
    </div>
  );
};

export default InstructionStep;
