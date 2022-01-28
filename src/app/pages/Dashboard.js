import React from 'react';
import DashBoardCard from '../components/DashboardCard';

export default function Dashboard() {
  return (
    <div>
      <div className="row">
        <DashBoardCard
          title={'Total Service'}
          indicate={true}
          indicateBox={false}
          value={'1.5k'}
        />
        <DashBoardCard
          title={'Total Manager'}
          indicate={true}
          indicateBox={false}
          value={'2.5k'}
        />
        <DashBoardCard
          title={'Total Document'}
          indicate={true}
          indicateBox={false}
          value={'2.5k'}
        />
        <DashBoardCard
          title={'Total Reports'}
          indicateBox={false}
          indicate={true}
          value={'2.5k'}
        />
        <DashBoardCard
          title={'On Track Document'}
          indicate={false}
          indicateBox={false}
          value={'2.5k'}
        />
        <DashBoardCard
          title={'Returned Document Today'}
          indicate={false}
          indicateBox={false}
          value={'2.5 of'}
          percentage={'10'}
        />
        <DashBoardCard
          title={'Return date passed'}
          indicate={false}
          indicateBox={false}
          value={'2.5 of '}
          percentage={'10'}
        />
        <DashBoardCard
          title={'Users'}
          indicate={false}
          indicateBox={false}
          value={'2k '}
        />
      </div>
    </div>
  );
}
