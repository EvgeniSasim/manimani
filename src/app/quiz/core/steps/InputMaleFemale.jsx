import React from 'react';
import { Flex, Box } from 'grid-styled';

import CheckboxImage from './CheckboxImage';
import {constants} from '~/app/quiz/duck'
import {gender} from '~/app/common/dictionaries';

const InputMaleFemale = ({ input }) => (
    <Flex
        mt="25px"
        ml="20px"
    >
        <Flex is="label" mr="30px" alignItems="center" onClick={() => input.onChange(gender.MALE)}>
            <CheckboxImage value={input.value === gender.MALE} />
            <Box fontSize={13} color="#FFF" mt="3px">
                Мужчина
            </Box>
        </Flex>
        <Flex is="label" alignItems="center" onClick={() => input.onChange(gender.FEMALE)}>
            <CheckboxImage value={input.value === gender.FEMALE} />
            <Box fontSize={13} color="#FFF" mt="3px">
                Женщина
            </Box>
        </Flex>
    </Flex>
);

export default InputMaleFemale;
