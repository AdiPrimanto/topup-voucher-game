import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";

export default function Transaction() {
    return (
        <section className="transactions overflow-auto">
            <Sidebar activeMenu="transactions" />
            <TransactionContent />
        </section>
    )
}
