import Link from 'next/link';
import Navigator from './../../components/navigator';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    return {
        props: { users: data }
    }
}



const Users = ({ users }) => {
    return (
        <div className='container'>
            <Navigator />
            <h2>Users</h2>
            {users.map(user => <div key={user.id}>
                <Link href={`users/${user.id}`}><a>{user.name}</a></Link>
            </div>)}
        </div>
    );
}

export default Users;
