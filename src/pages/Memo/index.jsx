import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useState } from 'react';
import MemoContent from './MemoContent';
import './memo.css'

const Memo = () => {
    const [showPdf, setShowPdf] = useState(false);

    const togglePdfVisibility = () => {
        setShowPdf(!showPdf);
    };

    return (
        <section id='section__Memo ' style={{ paddingTop: "4rem" }} className=' d-md-flex'>
            <div className='col-md-5 memo__PDF'>
                <MemoContent />
            </div>
            <div className='col-md-7 text-center memo__PDF'>
                <button className='btn btn-outline-danger' onClick={togglePdfVisibility}>
                    {showPdf ? 'Hide PDF' : 'Show Full Memo PDF'}
                </button>
                {showPdf && memoPage()}
            </div>
        </section>
    );
};

const memoPage = () => {
    return (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
            <Viewer fileUrl="/memo/MemoRestaurant.pdf" />
        </Worker>
    );
};

export default Memo;