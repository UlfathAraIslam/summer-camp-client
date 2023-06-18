import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useSelectedClasses = () => {
    
    const { user } = useAuth();
 
    

    const { isLoading, refetch, data: selectedClasses=[]} = useQuery({
        queryKey: ['selectedClasses', user?.email],

        queryFn: async () => {
            const res = await fetch(`https://b7a12-summer-camp-server-side-ulfath-ara-islam.vercel.app/selectedClasses?email=${user?.email}`)
            const data = await res.json();
            console.log(data);

            return data;

        },
    })
    return [selectedClasses, refetch, isLoading]

}
export default useSelectedClasses;
