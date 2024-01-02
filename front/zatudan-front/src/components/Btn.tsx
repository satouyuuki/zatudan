import { useRouter } from 'next/router';
import { ButtonProps } from '@/types';

const Btn = ({ id, name }: ButtonProps) => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push(`/categories/${id}`);
    };

    return (
        <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm border border-transparent focus:outline-none focus:border-blue-700 mr-2 mb-2">
            {name}
        </button>
    )
} 

export default Btn; 