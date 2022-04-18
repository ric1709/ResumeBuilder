import React from 'react';
import SummaryForm from '../components/Summary/SummaryForm';
import './SummaryPage.css'
import summaryimg from '../assets/imgs/summary-img.jpeg'

function SummaryPage() {
    return (
        <div className='summary-wrapper'>
			<SummaryForm/>
			<div className='rigthImg'>
				<img
					className='img-summary'
                    src={summaryimg}
					alt=''
				/>
			</div>
		</div>
    );
}

export default SummaryPage;