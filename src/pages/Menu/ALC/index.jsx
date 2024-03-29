import { useState } from 'react';
import menuJson from '/public/images/cloudpot-menu/menuJson.json';
import './ALC.css';

const ALC = () => {
  const data = menuJson;
  const [searchTerm, setSearchTerm] = useState('');

  const groupedData = data.reduce((result, item) => {
    const groupName = item.Nhóm;
    if (!result[groupName]) {
      result[groupName] = [];
    }
    result[groupName].push(item);
    return result;
  }, {});

  const filteredData = Object.keys(groupedData).map((groupName) => {
    const filteredItems = groupedData[groupName].filter((item) =>
      item['Tên món'].toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredItems.length > 0) {
      return {
        groupName,
        items: filteredItems,
      };
    }

    return null;
  }).filter(Boolean);

  return (
    <section id='section__ALC' className='w-75 m-auto'>
      <div className='d-md-flex justify-content-between'>
        <h1 className='section__Title col-md-7'>Menu ALC</h1>
        <hr className="w-100" style={{ border: "1px solid var(--secondary-color)" }} />
        <input
          type='text'
          className='form-control col-md-5'
          placeholder='Tìm theo tên món...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr className='w-25' style={{ border: '1px solid var(--secondary-color)' }} />

      <div className='container'>
        {filteredData ? filteredData.map((group, groupIndex) => (
          <div key={groupIndex} >
            <h4 className='table-title'>{group.groupName}</h4>
            <div className='table-responsive bg-white'>
              <table className='table table-bordered table-striped'>
                <thead className='thead text-white bg-success'>
                  <tr>
                    <th>STT</th>
                    <th>Tên món</th>
                    <th>Picture</th>
                    <th>ĐL tổng (gram)</th>
                    <th>Giá bán (HCM)</th>
                    <th>Nước chấm</th>
                    <th>Rau ăn kèm</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td>{itemIndex + 1}</td>
                      <td>{item['Tên món']}</td>
                      <td><img src={item['imageUrl']} /></td>
                      <td>{item['ĐL']} gram</td>
                      <td>{item['Giá bán HCM']} VND</td>
                      <td>
                        {item['Nước chấm'] !== null ? (
                          <div className='text-success'>{item['Nước chấm']}</div>
                        ) : (
                          <div className='text-danger'>none</div>
                        )}
                      </td>
                      <td>
                        {item['Rau ăn kèm'] !== null ? (
                          <div className='text-success'>{item['Rau ăn kèm']}</div>
                        ) : (
                          <div className='text-danger'>none</div>
                        )}
                      </td>
                      <td>{item['Note']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
          : <>none</>}
      </div>
    </section>
  );
};

export default ALC;
