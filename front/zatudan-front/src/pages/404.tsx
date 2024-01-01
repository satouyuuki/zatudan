import Link from "next/link";

export default function Custom404() {
    return (
        <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mb-4">ページが見つかりません</p>
            <Link href="/" className="text-blue-500 hover:underline">ホームに戻る</Link>
        </div>
    )
}