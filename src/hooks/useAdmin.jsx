// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxioSecure from "./useAxioSecure";


// const useAdmin = () => {
//     const {user} = useAuth();
//     const [axiosSecure] = useAxioSecure();
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         enabled : !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             console.log('is Admin response', res)
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]

// };

// export default useAdmin;