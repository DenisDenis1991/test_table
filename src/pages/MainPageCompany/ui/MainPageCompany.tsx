import classNames from 'classnames';
import cls from './MainPage.module.scss'
import { AddNewCompany, CompanyList } from '@/widget';
import { CompanyRequisites } from '@/shared/const';

interface IMainPageCompanyProps {
  className?: string
}

export const MainPageCompany: React.FC<IMainPageCompanyProps> = () => {
  return (
    <div className={classNames(cls.company)}>
      <ul className={classNames('table')}>
        {CompanyRequisites.map(({ headerName }) => (
          <li
            className={classNames(cls.list__item)}
            key={headerName}
          >
            <span>
              {headerName}
            </span>
          </li>
        ))}
      </ul>
      <CompanyList />
      <AddNewCompany />
    </div>
  )
}
