import classNames from 'classnames';
import { useEffect } from 'react';
import { $companyList, $pending, initCompanyList } from '../model';
import { useUnit } from 'effector-react';
import { Form } from '@base-ui-components/react/form';
import { Company } from '@/entities';
import { $isDisabledCompany, onFetchEditCompany, onFinishEditCompany } from '@/features/EditCompany/model';
import { EditCompany } from '@/features';
import { CircularProgress } from '@mui/material';


interface ICompanyListProps {
  className?: string
}

export const CompanyList: React.FC<ICompanyListProps> = () => {
  const companyList = useUnit($companyList)

  useEffect(() => {
    initCompanyList()
  }, [])

  const loading = useUnit($pending);
  const isDisabled = useUnit($isDisabledCompany)

  return (
    loading ?
      <CircularProgress />
      :
      <ul className={classNames('list')}>
        {companyList.map((company) => (
          <li
            key={company.id}
            className={classNames('list__item')}
          >
            <Form
              className={classNames('table')}
              onSubmit={async (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const value = Object.fromEntries(formData);
                onFetchEditCompany({ ...value, id: company.id })
                onFinishEditCompany(company.id)
              }}
            >
              <Company
                company={company}
                isDisabled={isDisabled}
              />
              <>
                <EditCompany
                  id={company.id}
                  isDisabled={isDisabled}
                />
              </>
            </Form>
          </li>
        ))}
      </ul>
  )
}
