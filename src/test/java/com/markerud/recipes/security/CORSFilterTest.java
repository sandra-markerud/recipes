package com.markerud.recipes.security;

import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockFilterChain;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import static javax.servlet.http.HttpServletResponse.SC_ACCEPTED;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

class CORSFilterTest {

    private CORSFilter classUnderTest = new CORSFilter();
    private MockHttpServletRequest request = new MockHttpServletRequest();
    private MockHttpServletResponse response = new MockHttpServletResponse();
    private MockFilterChain chain = new MockFilterChain();

    @Test
    void whenFilter_thenCorrectResponseHeadersAreSet() throws Exception {
        // when
        classUnderTest.doFilter(request, response, chain);

        // then
        assertThat(response.getHeaderNames(), contains("Access-Control-Allow-Origin", "Access-Control-Allow-Methods",
                "Access-Control-Allow-Headers"));
    }

    @Test
    void whenRequestMethodIsOptions_thenResponseStatusIsAccepted() throws Exception {
        // given
        request.setMethod("OPTIONS");

        // when
        classUnderTest.doFilter(request, response, chain);

        // then
        assertThat(response.getStatus(), is(comparesEqualTo(SC_ACCEPTED)));
    }

}
