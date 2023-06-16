import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useSelectedClasses = () => {
    const { user } = useContext(AuthContext);
    
    const { isLoading, refetch, data: selectedClasses=[]} = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedClasses?email=${user.email}`)
            return res.json();

        },
    })
    return [selectedClasses, refetch, isLoading]

}
export default useSelectedClasses;