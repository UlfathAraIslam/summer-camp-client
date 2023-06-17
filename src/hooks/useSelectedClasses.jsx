import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useSelectedClasses = () => {
    
    const { user } = useAuth();
 
    

    const { isLoading, refetch, data: selectedClasses=[]} = useQuery({
        queryKey: ['selectedClasses', user?.email],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`)
            return res.data;

        },
    })
    return [selectedClasses, refetch, isLoading]

}
export default useSelectedClasses;
