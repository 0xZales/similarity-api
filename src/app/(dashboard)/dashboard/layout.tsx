import '@/styles/globals.css' 
interface LayoutProps {
    
}
 
function Layout  ({children } : {children : React.ReactNode}) 
{
    return ( 
        <section className="pt-12">
            {children}
        </section>
     );
}
 
export default Layout;