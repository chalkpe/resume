import contacts from '../data/contacts'

import { Heading, List, ListItem, ListIcon } from '@chakra-ui/react'

const Contacts = () => {
  return (
    <div className="content">
      <Heading size="md">인적사항</Heading>
      <List spacing={1}>
        {contacts.map(({ text, icon, href }) => (
          <ListItem>
            <ListIcon as={() => <i className={`fa fa-${icon}`} />} />
            {text}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Contacts
